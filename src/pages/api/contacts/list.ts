import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const filePath = path.join(process.cwd(), 'data', 'contacts.json');
    
    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (!fileContent.trim()) {
      return res.status(200).json([]);
    }

    const contacts = JSON.parse(fileContent);
    
    // En yeni mesajları önce göster
    contacts.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error reading contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}