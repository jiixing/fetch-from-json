import posts from '../data/posts.json'

export function getAllJsonPostIds() {
    const ret =posts.map(p=>{return{ params:{id:p.id.toString()}}}) //<< id: has to be string
    console.log("getAllJsonPostIds",ret)

return ret
}
