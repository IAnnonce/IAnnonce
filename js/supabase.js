// Connexion Supabase - IAnnonce
const SUPABASE_URL = "https://udubddnueiupdjewkzyp.supabase.co";
const SUPABASE_KEY = "sb_publishable_rnvBmTb9am3nY92vmpBeRA_AnpHkfL-";

// On garde createClient, puis on remplace le global par le client
const { createClient } = window.supabase;
window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
