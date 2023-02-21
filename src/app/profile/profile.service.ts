import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  projects: any = [
    // {
    //   id: 1,
    //   title: 'Read data from Google spreadsheet in Angular',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/MyShop/#/',
    //   githurl: 'https://github.com/mehulk05/MyShop',
    //   mediumlink:
    //     'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
    //   imgUrl: 'assets/images/z1.png',
    //   tech: 'Angular 10 , Google SpreadsheetApi',
    // },
  ];

  portfolioList: any = [
    {
      id: 1,
      title: "Smart Contract",
      imgUrl: "assets/images/portfolios/blockchain-smart-contract.png",
      imgAlt: "Smart contract",
      category: "Blockchain Development",
      skills: "Solidity/Rust/Remix",
    },
    {
      id: 2,
      title: "SideSwap",
      imgUrl: "assets/images/portfolios/app-sideswap.png",
      imgAlt: "sideswap",
      category: "App Development",
      skills: "Dart/Flutter/Android",
    },
    {
      id: 3,
      title: "app.xconsole.tv",
      imgUrl: "assets/images/portfolios/blockchain-nft.png",
      imgAlt: "0xConsole app",
      category: "Blockchain Development",
      skills: "React/Solidity/NFT",
    },
    {
      id: 4,
      title: "spot.market",
      imgUrl: "assets/images/portfolios/blockchain-spotmarket.png",
      imgAlt: "spot market",
      category: "Blockchain Development",
      skills: "NFT/Market/React",
    },
    {
      id: 5,
      title: "epic-game-ui.vercel.app",
      imgUrl: "assets/images/portfolios/game-epic-nft.png",
      imgAlt: "epic game",
      category: "Blockchain Development",
      skills: "NFT/Game/NextJS/BSC(test)",
    },
    {
      id: 6,
      title: "card-game-gamma.vercel.app",
      imgUrl: "assets/images/portfolios/game-match-card.png",
      imgAlt: "Card game",
      category: "Web Development",
      skills: "Vue/JavaScript/Game",
    },
    {
      id: 7,
      title: "React JS",
      imgUrl: "assets/images/portfolios/web-react.jpg",
      imgAlt: "react",
      category: "Web Development",
      skills: "React/JavaScript/SCSS",
    },
    {
      id: 8,
      title: "NodeJS",
      imgUrl: "assets/images/portfolios/nodejs.jpg",
      imgAlt: "node js",
      category: "Web Development",
      skills: "NodeJS/Backend/TypeScript",
    },
    {
      id: 9,
      title: "Angular",
      imgUrl: "assets/images/portfolios/web-angular.png",
      imgAlt: "angular js",
      category: "Web Development",
      skills: "Angular/TypeScript",
    },
    {
      id: 10,
      title: "Pure HTML",
      imgUrl: "assets/images/portfolios/web-html.png",
      imgAlt: "html",
      category: "Web Development",
      skills: "HTML/JavaScript/CSS/Frontend",
    },
    {
      id: 11,
      title: "gearfocus.com",
      imgUrl: "assets/images/portfolios/web-marketplace.png",
      imgAlt: "b2c",
      category: "Web Development",
      skills: "Angular/MySQL/PHP/AWS",
    },
    {
      id: 12,
      title: "quiz-app-amber-gamma.vercel.app",
      imgUrl: "assets/images/portfolios/web-quiz-app.png",
      imgAlt: "quiz-app",
      category: "Web Development",
      skills: "Vue/Frontend",
    },
    {
      id: 13,
      title: "Server Manage",
      imgUrl: "assets/images/portfolios/manage-pm2.png",
      imgAlt: "Manage server",
      category: "Management",
      skills: "DigitalOcean/Ubuntu/pm2",
    },
  ];

  about =
    'Creative and results-oriented software engineer with a focus on the design and implementation of back-end side. Lover of everything related to generate innovation and new knowledge. Problem solver who faces them with a smile and solves them as quickly as possible. I have 8+ years of experience as a software engineer and full stack developer. Skilled in agile processes, back-end and front-end development, and creating financial dApp on blockchain. I am good at cloud computing, programming and always developed by using Software Development Life Cycle. My strengths are in ability which can work smoothly under many stress. Beside I am interested in winter sports such as snowboarding.';

  about2 = `Worked with Software Development Life Cycle(SDLC) .
  Skilled in agile processes, back-end and front-end development, and creating financial dApp on blockchain .
  Familiar with blockchain concepts and know how to implement .
  Expertise in Angular, React, Javascript, Node JS and UI with Responsive Designs / Solidity, Contract, Truffle & Hardhat and Web3`;

  resumeurl =
    'https://drive.google.com/file/d/1mS3IJdEsohTjeWKCXPfZ15NMhhsGGiul/view?usp=sharing';

  skillsData: any = [
    {
      id: 1,
      skill: 'HTML5',
      image: 'assets/images/skills/html-5.svg',
    },
    {
      id: 2,
      skill: 'CSS3',
      image: 'assets/images/skills/css3.svg',
    },
    {
      id: 3,
      skill: 'JavaScript',
      image: 'assets/images/skills/javascript.svg',
    },
    {
      id: 4,
      skill: 'TypeScript',
      image: 'assets/images/skills/typescript.svg',
    },
    {
      id: 5,
      skill: 'Angular',
      image: 'assets/images/skills/angular.svg',
    },
    {
      id: 6,
      skill: 'React',
      image: 'assets/images/skills/react.svg',
    },
    {
      id: 7,
      skill: 'Vue',
      image: 'assets/images/skills/vue.svg',
    },
    {
      id: 8,
      skill: 'NodeJS',
      image: 'assets/images/skills/node-js.svg',
    },
    {
      id: 9,
      skill: 'Ethereum',
      image: 'assets/images/skills/ethereum.svg',
    },
    {
      id: 10,
      skill: 'Solidity',
      image: 'assets/images/skills/solidity.svg',
    },
    {
      id: 11,
      skill: 'Git',
      image: 'assets/images/skills/git.svg',
    },
    {
      id: 12,
      skill: 'Github',
      image: 'assets/images/skills/github.svg',
    },
    // {
    //   id: 13,
    //   skill: 'Gitlab',
    //   image: 'assets/images/skills/gitlab.svg',
    // },
    {
      id: 13,
      skill: 'Ruby',
      image: 'assets/images/skills/ruby.svg',
    },
    {
      id: 14,
      skill: 'Flutter',
      image: 'assets/images/skills/flutter.svg',
    },
    {
      id: 15,
      skill: 'MongoDB',
      image: 'assets/images/skills/mongodb.png',
    },
    {
      id: 16,
      skill: 'MySQL',
      image: 'assets/images/skills/mysql.svg',
    },
  ];

  educationData: any = [
    {
      id: 1,
      from_to_year: '2011 - 2015',
      education: "Bachelor's Degree",
      institution: 'Xiangtan University',
      stream: 'Bachelor of Computer Science',
      info: `Be honored with bachelor’s degree in Computer Science under the robust educational background .
I studied about Web development, Software Engineering, App Development and Project management`,
    },
  ];

  exprienceData: any = [
    {
      id: 8,
      company: 'JGoodIdea',
      location: 'Remote',
      timeline: 'Apr 2018 - Present',
      role: 'Co-Founder',
      work: 'Developing/Testing/Maintaining projects . The goal is to provide better than expectation.'
    },
    {
      id: 7,
      company: 'ApexLabs',
      location: 'Remote',
      timeline: 'Nov 2021 - Present',
      role: 'DApp Developer',
      work: 'As a member of this team, we developed major projects for the company and I contributed to the development. These time I worked on developing staking app, auction marketplace - it\'s amazing. I grew my skills on smart contract and dapp frontend development . Skill set : Solidity, Remix, Smart contract, React, Web3, Ethereum, Canvas, DigitalOcean'
    },
    {
      id: 6,
      company: 'Crosswise fi',
      location: 'Remote',
      timeline: 'May 2021 - Apr 2022',
      role: 'DevOps Manager & Full Stack Developer',
      work: 'I was owed a comfortable and easy-to-manage environment and blockchain applications. For this, I developed a script that deploys automatically the application and integrates CircleCI into a GitHub repository . I published a pre-sale web application to help the team raise over $1.5 million . Technologies: Git, DigitalOcean, Nginx, pm2, npmjs, React, TypeScript, Web3, Solidity, ICO, NodeJS, Express, MongoDB'
    },
    {
      id: 5,
      company: 'SideSwap',
      location: 'Remote',
      timeline: 'Jan 2020 - Aug 2020',
      role: 'Full Stack Developer',
      work: 'I needed to develop a crypto exchange platform and app. I published successfully by using react and flutter . Technologies: React, JavaScript, Dart, Flutter'
    },
    {
      id: 4,
      company: 'PhoenixDeFi',
      location: 'Remote',
      timeline: 'Mar 2019 - Jan 2020',
      role: 'Full Stack Developer / Smart contract developer',
      work: 'Developed and deployed IOC/farm/pool contract . Developed DEX platform - DeFi . Implemented platform with blockchain network . Technologies: React, Web3, JavaScript, Blockchain, Solidity, Smart contract, Truffle, Dex'
    },
    {
      id: 3,
      company: 'DAO system',
      location: 'Remote',
      timeline: 'Nov 2018 - Mar 2019',
      role: 'Smart contract developer - Freelancer',
      work: 'Built logic of lending system . Implement smart contract by using solidity, truffle . Technologies: Solidity, Truffle, Smart Contract, Strategy, Bonding & Lending'
    },
    {
      id: 2,
      company: 'Aerofiler',
      location: 'Remote',
      timeline: 'Jun 2018 - Nov 2018',
      role: 'Front-end Developer',
      work: 'I was responsible for providing a company landing page which can be templates . I developed code that was well-structured and well designed to easily update the future and delivered . Technologies: HTML, CSS, JavaScript, PHP, MySQL, Email template, SocketIO'
    },
    {
      id: 1,
      company: 'GearFocus',
      location: 'Remote',
      timeline: 'May 2015 - Apr 2018',
      role: 'Full Stack Developer',
      work: 'Owed to test and develop email system, payment module, and search module . Here I developed search function module, email handling module, and payment process module . I grew my skills in developing B2C/C2C marketplace and Angular, PHP, HTML, MySQL, AWS . Technologies: Angular, NodeJS, PHP, AWS, HTML, Ruby on rails, SQLite, E2E'
    },
  ];

  viewAs: any = [
    {
      id: 1,
      captionLink: "https://r-jgoodidea.netlify.app",
      imgUrl: "assets/images/viewas/react.svg",
      imgAlt: "View in React",
      caption: "React",
    },
    {
      id: 2,
      captionLink: "https://jgoodidea.netlify.app",
      imgUrl: "assets/images/viewas/angular.svg",
      imgAlt: "View in Angular",
      caption: "Angular",
    },
    {
      id: 3,
      captionLink: "https://jgoodidea.herokuapp.com",
      imgUrl: "assets/images/viewas/ror.svg",
      imgAlt: "View in Ruby on Rails",
      caption: "Coming Soon",
    },
    {
      id: 4,
      captionLink: "#",
      imgUrl: "assets/images/viewas/flutter.svg",
      imgAlt: "View in Flutter",
      caption: "Coming Soon",
    },
  ]

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  
  getPortfolioList(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.portfolioList;
  }

  getViewAs(): Observable<any> {
    return this.viewAs;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
