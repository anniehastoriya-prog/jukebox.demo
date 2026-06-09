import db from "#db/client";

import { createPLaylist } from "#db/queries/playlist";
import { createPlaylistTrack } from "#db/queries/plylist_tracks";
import { createTrack } from "#db/queries/tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 20; i++) {
    await createPLaylist("PLaylist" + i, "lorem ipsum playlist description ");
    await createTrack(" Track + i, i * 50000");
  }
  for (let i = 1; i <= 15; i++) {
    const playlistID = 1 + Math.floor(i / 2);
    await createPlaylistTrack(playlistId, i);
  }
}
