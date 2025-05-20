// import { supabase } from "../../../config/supabase";
// const {data:{user}} = await supabase.auth.getUser()

// export const getUserImg = async () => {
//   const { data, error } = await supabase.storage.from('photos').list(`user-${user?.id}/`,{
//     limit:10,
//     offset:0,
//     sortBy:{column:'name',order:'asc'}
//   })

// //   return data?.map(file => {
// //     supabase.storage.from('photos').getPublicUrl(`user-${user?.id}/${file.name}`).data.publicUrl
// //   })
//   return data?.map((file) => {
//     const { data: urlData } = supabase.storage
//       .from("photos")
//       .getPublicUrl(`user-${user?.id}/${file.name}`);
//     return urlData.publicUrl;
//   });
// }
import { supabase } from "../../../config/supabase";

export const getUserImg = async () => {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return [];

  const res = await supabase.storage.from("photos").list(`user-${user.id}/`);
  if (!res.data) return [];

  return res.data.map(file =>
    supabase.storage.from("photos").getPublicUrl(`user-${user.id}/${file.name}`).data.publicUrl
  );
};
