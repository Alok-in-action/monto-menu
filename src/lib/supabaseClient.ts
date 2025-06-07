import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase'; // Will create this next if needed for typed client

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}
if (!supabaseAnonKey) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

// If you want to use Supabase's generated types for your client:
// 1. Run `npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/supabase.ts`
// 2. Uncomment the Database import above and the generic type below.
// export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
