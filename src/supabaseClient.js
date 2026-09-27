import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vvbzvpeldmowtkygnvoa.supabase.co";
const supabaseKey = "sb_publishable_hq_Q2qQRAU6G4gAu_CUmQw_Uu_rK1-x";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);