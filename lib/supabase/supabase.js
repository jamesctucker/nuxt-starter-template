import { createClient } from "@supabase/supabase-js";

const supabaseKey = useRuntimeConfig().supabaseApiKey;
const supabaseUrl = useRuntimeConfig().supabaseUrl;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
