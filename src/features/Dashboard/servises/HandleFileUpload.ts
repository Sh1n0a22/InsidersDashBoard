import { supabase } from "../../../services/supabase";

export const handleFileUpload = async (filesList: FileList | File[], userId: string) => {
  if (!filesList) return;
  const results = [];

  for (const file of Array.from(filesList)) {
    const filePath = `user-${userId}/${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from('photos')
      .upload(filePath, file);

    if (uploadError) {
      console.error(`Failed to upload ${file.name}:`, uploadError.message);
      continue;
    }

    const { error: insertError } = await supabase
      .from('photos')
      .insert({ user_id: userId, path: filePath });

    if (insertError) {
      console.error(`Failed to insert metadata for ${file.name}:`, insertError.message);
      continue;
    }

    results.push({ path: filePath });
    console.log(`${file.name} uploaded and metadata saved`);
  }

  return results;
};
