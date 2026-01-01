import { Redis } from "@upstash/redis";
import {Ratelimit} from "@upstash/ratelimit";

import "dotenv/config";

const ratelimit = new Ratelimit({


 


redis:Redis.fromEnv(),
limiter:Ratelimit.slidingWindow(100,"60 s"),
});

export default ratelimit;
//it is just for testing purposes
// await redis.set("foo", "bar");
// await redis.get("foo");
// import { Redis } from '@upstash/redis'
// const redis = new Redis({
//   url: 'https://wondrous-gannet-55011.upstash.io',
//   token: 'AdbjAAIncDFlOGE3NmYzYjJhZjU0NGRmYmE4NmU1OWY2YTE3OWY4OXAxNTUwMTE',
// })

// await redis.set("foo", "bar");
// await redis.get("foo");