import supabase from "@/lib/supabase/supabase.js";

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from("dogs").select("*");

  return {
    data: data,
    error: error,
  };
});
