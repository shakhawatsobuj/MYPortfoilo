// server.js - Simple backend for dynamic estimate & contact form
// Run with: node server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '/')));

// ----- CONFIGURATION (editable rates) -----
const configPath = path.join(__dirname, 'config.json');

// Default rates if config doesn't exist
const defaultRates = {
  cement: 850,      // per bag
  sand: 1200,       // per cft
  aggregate: 1100,  // per cft
  brick: 12,        // per piece
  steel: 62000,     // per ton
  labour: 800,      // per day
  lastUpdated: new Date().toISOString().split('T')[0]
};

// Load or create config
let materialRates = {};
try {
  if (fs.existsSync(configPath)) {
    materialRates = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } else {
    materialRates = { ...defaultRates };
    fs.writeFileSync(configPath, JSON.stringify(materialRates, null, 2));
  }
} catch (err) {
  console.error('Error loading config:', err);
  materialRates = { ...defaultRates };
}

// ----- API ROUTES -----

// Get current rates
app.get('/api/rates', (req, res) => {
  res.json({ 
    rates: materialRates,
    lastUpdated: materialRates.lastUpdated || defaultRates.lastUpdated
  });
});

// Update rates (admin endpoint)
app.post('/api/rates', (req, res) => {
  try {
    const { cement, sand, aggregate, brick, steel, labour } = req.body;
    if (cement !== undefined) materialRates.cement = parseFloat(cement) || 0;
    if (sand !== undefined) materialRates.sand = parseFloat(sand) || 0;
    if (aggregate !== undefined) materialRates.aggregate = parseFloat(aggregate) || 0;
    if (brick !== undefined) materialRates.brick = parseFloat(brick) || 0;
    if (steel !== undefined) materialRates.steel = parseFloat(steel) || 0;
    if (labour !== undefined) materialRates.labour = parseFloat(labour) || 0;
    materialRates.lastUpdated = new Date().toISOString().split('T')[0];
    
    fs.writeFileSync(configPath, JSON.stringify(materialRates, null, 2));
    res.json({ success: true, rates: materialRates });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Calculate estimate
app.post('/api/estimate', (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ error: 'Invalid items array' });
    }

    let subtotal = 0;
    let materialCost = 0;
    let labourCost = 0;

    const calculatedItems = items.map(item => {
      const qty = parseFloat(item.quantity) || 0;
      const rate = parseFloat(item.rate) || 0;
      const amount = qty * rate;
      subtotal += amount;

      // Categorize costs (simple logic)
      if (item.category === 'material') materialCost += amount;
      if (item.category === 'labour') labourCost += amount;
      
      return { ...item, amount: amount.toFixed(2) };
    });

    // Apply material rates from config for quick calculations
    // This is a simplified example - in real use, items would reference material types
    const materialRatesApplied = { ...materialRates };
    
    res.json({
      success: true,
      items: calculatedItems,
      summary: {
        subtotal: subtotal.toFixed(2),
        materialCost: materialCost.toFixed(2),
        labourCost: labourCost.toFixed(2),
        additionalCost: (subtotal * 0.05).toFixed(2), // 5% contingency
        total: (subtotal * 1.05).toFixed(2),
        rates: materialRatesApplied,
        lastUpdated: materialRates.lastUpdated || defaultRates.lastUpdated
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Contact form submission
app.post('/contact', (req, res) => {
  try {
    const { name, email, phone, inquiry, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please fill in all required fields (name, email, subject, message)' 
      });
    }

    // Log the submission (in production, save to database or send email)
    console.log('📩 New Contact Form Submission:');
    console.log(`  Name: ${name}`);
    console.log(`  Email: ${email}`);
    console.log(`  Phone: ${phone || 'N/A'}`);
    console.log(`  Inquiry: ${inquiry || 'General'}`);
    console.log(`  Subject: ${subject}`);
    console.log(`  Message: ${message}`);
    console.log('---');

    // Save to a simple log file
    const logEntry = {
      timestamp: new Date().toISOString(),
      name, email, phone, inquiry, subject, message
    };
    
    const logPath = path.join(__dirname, 'contacts.log');
    fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');

    // In production, you would send an email here
    // Example: nodemailer or sendgrid integration

    res.json({ 
      success: true, 
      message: 'Your message has been received. We will contact you soon.' 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get contact logs (admin only - simple demo)
app.get('/api/contacts', (req, res) => {
  try {
    const logPath = path.join(__dirname, 'contacts.log');
    if (!fs.existsSync(logPath)) {
      return res.json({ contacts: [] });
    }
    const logs = fs.readFileSync(logPath, 'utf8')
      .split('\n')
      .filter(line => line.trim())
      .map(line => JSON.parse(line));
    res.json({ contacts: logs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    rates: materialRates,
    lastUpdated: materialRates.lastUpdated || defaultRates.lastUpdated
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Material rates loaded:`, materialRates);
  console.log(`📝 Contact logs will be saved to contacts.log`);
});