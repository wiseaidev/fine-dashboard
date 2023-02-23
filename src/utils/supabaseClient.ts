import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (process.env.REACT_APP_SUPABASE_URL as string) ?? "";
const supabaseSecretKey =
  (process.env.REACT_APP_SUPABASE_ANON_KEY as string) ?? "";
const supabaseClient = createClient(supabaseUrl, supabaseSecretKey);

export default supabaseClient;
