
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Post = require("./models/Post");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Mongo connected. Seeding data...");

    await Post.deleteMany({}); 

    await Post.insertMany([
      {
        title: "Curry: A functional logic programming language (curry-lang.org)",
        url: "https://curry-lang.org/",
        author: "hyperbrainer",
        points: 143,
      },
      {
        title: "GCC 15.1 (gcc.gnu.org)",
        url: "https://gcc.gnu.org/gcc-15/",
        author: "jrepinc",
        points: 249,
      },
      {
        title: "Cloth (cloudofoz.com)",
        url: "https://www.cloudofoz.com/verlet-test/",
        author: "jrepinc",
        points: 225,
      },
      {
        title: "Berkeley Humanoid Lite – Open-source robot (berkeley-humanoid.org)",
        url: "https://lite.berkeley-humanoid.org/",
        author: "jrepinc",
        points: 150,
      },
      {
        title: "Lossless LLM compression for efficient GPU inference via dynamic-length float (arxiv.org)",
        url: "https://arxiv.org/abs/2504.11651",
        author: "jrepinc",
        points: 347,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      },
      {
        title: "Mark Zuckerberg personally lost the Facebook antitrust case (pluralistic.net)",
        url: "https://pluralistic.net/2025/04/18/chatty-zucky/",
        author: "jrepinc",
        points: 52,
      }
      
    ]);

    console.log("Done!");
    process.exit();
  })
  .catch(err => console.error(err));
