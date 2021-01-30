import WPAPI from "wpapi"
import invariant from "invariant";
let API_URL = process.env.API_URL; //  [have to rerun when changed]
invariant(API_URL,"no API_URL in env")
const wp = new WPAPI({ endpoint: API_URL });


export async function getWpPostContent(slug) {


    console.log("slug",slug)
    let content = await wp.posts().slug(slug)
    return content[0]
}
