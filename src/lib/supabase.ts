import { createClient } from '@supabase/supabase-js';

// Replace with your actual project details from Supabase Settings > API
const supabaseUrl = 'https://liaoqzdwgyvcqzzbtolh.supabase.co/rest/v1/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpYW9xemR3Z3l2Y3F6emJ0b2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNDI1MTIsImV4cCI6MjA5MjYxODUxMn0.ZOT2MpdjmkOGTI5Vxs-kj3FSn1l5cTbs3v0icNzT90A';

export const supabase = createClient(supabaseUrl, supabaseKey);