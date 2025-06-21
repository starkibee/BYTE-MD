const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61USY7jRhD8S10lDPdNQAOmuGihSC1srYYPJbFIUeKmqhJFaqA3GPDZhi8+GPAH/J75gP0Eg1L3zABjj9uAeSomi5kRkZH5HmR5TJCDatB5Dwocl5Ci5kjrAoEO6J7DEGHQBgGkEHSAM7pM9sfJOLdn3oJflWHphU4oS0FEw3XWqvw+e7JPTCGk5Anc2qA4b5N495WEo3zVG072qqrLM8++Vrp1pIOQMctsNu1tLvJxvThh97kSBesJ3JqMMMZxFlnFHqUIw8RB9QTG+G3wIxfhrT7aHLzZBJd7NWL27qQoQsoiwav6Dh/bqXzoHfaW9Ub4i2f9oKa+m0TMAveqyn1Ot8vFRUmRVYlOEPl17vUjvarVB3wSRxkKBgHKaEzrN+s+nhhKnx/KPSby3YRY6ko17fOKY5jFyLalAzZU2Ztfz6I1fRvw5+71VESjw8bu5o6y1q7MaMH4mTut9a7gXKK5zAql563NeyM/Ap/gV68c/4vurdEoIETEbOuZJ1s7cXeMpNazqcTEVR3PIeeR9Jo414BV3wZ/7otsjzvOZdwT2BYuo3SJHFLBGa8dSlk+q4S3im4+m/LzT/AhPeOvoWTWKkuqSXY0WuKp2kzDYuAy0qyaz3fSeORkM8aOQm6f14dFDx2GNiukM+PCrIZ9HE0whBUeZVbh+d7A6l5X3uW0duP99OnO6IjqQQA63K0NMIpiQjGkcZ41MV4U2gAGpY92GNG7vIA47lY1XaKSlr9k+idxlYXHwSrdjNf8gBoDN+45WUD50omeQBsUON8hQlDQjwnNce0iQmCECOh8e+9UQxqjNKdoGAegA3hJVFROFTlV4r8h7y57SAksincZoqANQpynLgIdis+oDe4/iDJvazarabqmdBWpayhsl2cVxTAsTjdYsaGYPoo+xykiFKYF6HCKxIqKJinarf3/4DBUU1A1TRAUntMU3hZNXdckSegqhiapqvF1HJpw+64NMlTRh48b9QWuDcIYEzrPzkWSw+DV5K8f4W6XnzPq19nOaA4Ig85nYURpnEWkYXbOIN7t4xIZDQ/QCWFC0MeGI4yCVy4vS8zIg8aHvD1Ux+JKBQ32JtEX2nQ47kt5ksc1WeRZjVdkThC45l4TboMMNqmATyH+8OOvf/78w28ffvrlj9+/bwR6gd5UChCFcUIaZSeGKO/YvuXihHcHvZ5uRboR6eAT1dcRelhUMrWD7eyWV8j0672F2Z4qDkTV9cxxy9FXvjxPYBDlXmm5T3+TBHRAbj2PvPPkhJZZcJX8USscw56R17EgeIlSLfzN8phNe4El78q9vdm4rrnzpuEY9gdTLovz1PSSbX+itiDxsTmygu0MGdFTUy1AZbxDnxeLW2Rw3Xh9PWPYDdUu9GLFJ5Gk3gFKQ9kQSm6rHdPjsDUtQqZchTnZFtfheIXcNPFH3MEfmo4zZawl0g5HdlONF3s20h/DfV8uyctSj1/GLr6/hjG678iXfvxrUx/AG++xt/ZnOV627j9sri6aMuvKz2zCl5WazxytW46N8cQ0p9cyjmz2nAyX2doxt5UJbs0QFAmkYY5T0AEwC3B+Nw3Oz42ZB1mYf6WYobOD7staSyCh+qcB+bvZZx+3Jjgv+pDsQQcIM20jaI3ba70ofArp67wBvXlGIQNufwGtm4B5mggAAA==",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
