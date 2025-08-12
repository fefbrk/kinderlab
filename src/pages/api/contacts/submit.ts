import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contactData = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      type: type || 'General Inquiry',
      name,
      email,
      subject,
      message,
      status: 'unread'
    };

    // Data klasörünü oluştur
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    const filePath = path.join(dataDir, 'contacts.json');
    
    // Mevcut verileri oku
    let contacts = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      if (fileContent.trim()) {
        contacts = JSON.parse(fileContent);
      }
    }

    // Yeni veriyi ekle
    contacts.push(contactData);

    // Dosyaya kaydet
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

    res.status(200).json({ message: 'Contact form submitted successfully', id: contactData.id });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}