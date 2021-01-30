import invariant from "invariant"
import WPAPI from "wpapi"
let API_URL = process.env.API_URL; //  [have to rerun when changed]

console.log("API_URL",API_URL)
invariant(API_URL,"no API_URL in env")
const wp = new WPAPI({ endpoint: API_URL });

export default async function getWpPosts() {
    return wp.posts()
}
