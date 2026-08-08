// Connexion Supabase - IAnnonce
const SUPABASE_URL = "https://udubddnueiupdjewkzyp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkdWJkZG51ZWl1cGRqZXdrenlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MDk4NjYsImV4cCI6MjEwMTQ4NTg2Nn0.zHQM_cP5Ts7-6N2N2XbhSfghMGkZGvpTK2hHfGV5P3U";

// On garde createClient, puis on remplace le global par le client
const { createClient } = window.supabase;
window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
