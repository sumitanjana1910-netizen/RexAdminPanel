// /api/validate.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async function handler(req, res) {
  const { key } = req.query;

  const { data, error } = await supabase
    .from('keys')
    .select('*')
    .eq('key_value', key)
    .single();

  if (error || !data || data.status !== 'active') {
    return res.status(401).json({ success: false, message: "Invalid or Expired Key" });
  }

  res.status(200).json({ success: true, message: "Key is Active" });
}
