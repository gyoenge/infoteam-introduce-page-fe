const memberInfoList = [
  {
    name: "배설영",
    role: "frontend", // frontend, backend, both
    email: "seolyeongbae@gm.gist.ac.kr",
    githubLink: "https://github.com/SeolyeongBae",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "고도현",
    role: "frontend", // frontend, backend, both
    email: "doridori@gm.gist.ac.kr",
    githubLink: "https://github.com/Dohyun-Ko",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "오다현",
    role: "backend", // frontend, backend, both
    email: "o_dahyun@gm.gist.ac.kr",
    githubLink: "https://github.com/controlZ",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "이정우",
    role: "frontend", // frontend, backend, both
    email: "crowntheking@gm.gist.ac.kr",
    githubLink: "https://github.com/MiRoro2",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "정재홍",
    role: "backend", // frontend, backend, both
    email: "jaehong21@gm.gist.ac.kr",
    githubLink: "https://github.com/jaehong21",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "이상유",
    role: "backend", // frontend, backend, both
    email: "samlee10@gist.ac.kr",
    githubLink: "https://github.com/sangyulee",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "김현서",
    role: "frontend", // frontend, backend, both
    email: "dodok8@gmail.com",
    githubLink: "https://github.com/dodok8",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "박시원",
    role: "backend", // frontend, backend, both
    email: "siwon1115@gm.gist.ac.kr",
    githubLink: "https://github.com/siwonpada",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "장연성",
    role: "backend", // frontend, backend, both
    email: "yeonseongj22@gm.gist.ac.kr",
    githubLink: "https://github.com/ys0421",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "김금민",
    role: "frontend", // frontend, backend, both
    email: "gmkim03kor@gm.gist.ac.kr",
    githubLink: "https://github.com/zer0pacity",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "조민준",
    role: "backend", // frontend, backend, both
    email: "minjun_jo@gm.gist.ac.kr",
    githubLink: "https://github.com/minjunj",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "황인선",
    role: "frontend", // frontend, backend, both
    email: "inseon_ug@gm.gist.ac.kr",
    githubLink: "https://github.com/inthree3",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "이태균",
    role: "frontend", // frontend, backend, both
    email: "leetaegyun@gm.gist.ac.kr",
    githubLink: "https://github.com/Leetaegyun38",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
  {
    name: "손희경",
    role: "frontend", // frontend, backend, both
    email: "gyoengist@gm.gist.ac.kr",
    githubLink: "https://github.com/gyoenge",
    state: "on", // 활동중(on), 쉬는중(off), 졸업(exit)
  },
];

// 팀원 카드 이름 가나다순으로 정렬
memberInfoList.sort(function (a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  else return 0;
});

export { memberInfoList };
