
import docsapp from '../assets/docsapp.png'
import belonjoapp from '../assets/belonjoapp.png'
import webcompany from '../assets/webcompany.jpg'
import goopintar from '../assets/goopintar.jpg'
import myca from '../assets/myca.jpg'
import silmi from '../assets/silmi.jpg'
import logistik from '../assets/logistik.jpg'
import sporton from '../assets/sporton.jpg'


export const projects = [
  {
    title: 'E-Document Application',
    category: 'Full Stack',
    desc: 'An e-document platform with upload, download, and document management features, equipped with automated notifications to streamline workflows.',
    tags: [
      'data:image/png;base64,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',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBfijdF281DL1PeDgEJEoHA4Vn7X7l6f7bNsRc3vv5Kr6r5Yy4hO7WcTZ6mpAEjMw.nIR_3I36XXiM.jcofFxpPQ-&format=source',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoRVCediUjrL1lHlyry5gqBbHI9LvXOXkV7QQS8ucRQ&s=10'
    ],
    img: docsapp,
    github: 'https://github.com/arishanzo/technicaltest-ariswahyudi',
    link: '',
  },
  {
    title: 'Landing Page – Indonesia Pallet Logistic',
    category: 'Frontend',
    desc: 'A responsive company landing page for pallet logistics, featuring interactive animations to enhance user engagement.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10'
    ],
    img: logistik,
    github: 'https://github.com/arishanzo/ptpallet',
    link: 'https://indonesiapallet.co.id/',
  },
  {
    title: 'Webcompany – PT. Eintio Academic & Technology',
    category: 'Frontend',
    desc: 'A modern corporate website with responsive design and interactive animations to deliver a professional user experience.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10'
    ],
    img: webcompany,
    github: 'https://webcompany-fe.vercel.app/',
    link: 'https://webcompany-fe.vercel.app/',
  },
  {
    title: 'Goopintar Private Lessons',
    category: 'MicroServices',
    desc: 'Microservices architecture for an online private tutoring platform, focused on delivering an intuitive and engaging user experience.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtej9AlTUnNffaTZt0PB7aLL_B5LSGFPgx7XhMY9TDcA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPQaKN0OpWiL4ISrdz009ZCntJ6UtUuAD6joLmGiUsw&s=10'
    ],
    img: goopintar,
    github: 'https://github.com/arishanzo/userservicess_gopintar',
    link: 'https://goopintar.com/',
  },
  {
    title: 'Myca Swimming Lessons',
    category: 'Full Stack',
    desc: 'An online booking platform for swimming lessons with schedule management, payment integration, and automated notifications to improve operational efficiency.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPQaKN0OpWiL4ISrdz009ZCntJ6UtUuAD6joLmGiUsw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10'
    ],
    img: myca,
    github: 'https://github.com/arishanzo/mycalesrenang',
    link: 'https://mycalesrenang.com/',
  },
  {
    title: 'Payroll Application – Silmi Fashion',
    category: 'Full Stack',
    desc: 'A payroll system automating salary calculations based on attendance, overtime, leave, and other components, achieving up to 99% accuracy.',
    tags: [
      'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPQaKN0OpWiL4ISrdz009ZCntJ6UtUuAD6joLmGiUsw&s=10'
    ],
    img: silmi,
    github: 'https://github.com/arishanzo/silmi_payroll--Aplikasi-Gaji-Karyawan',
    link: '',
  },
  {
    title: 'E-Commerce Sport ON',
    category: 'E-commerce',
    desc: 'An e-commerce platform for selling sports equipment with a secure, scalable backend, supporting payment integration and product management.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfdD8p_Gz70ykqNtURPVYY8im767hadDZLgrqvRIT9w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10'
    ],
    img: sporton,
    github: 'https://github.com/arishanzo/sporton-fe-vercel-deploy',
    link: 'https://github.com/arishanzo/sporton-fe-vercel-deploy',
  },
  {
    title: 'Belonjo Application',
    category: 'Full Stack',
    desc: 'A local marketplace e-commerce application with search functionality, shopping cart, and online payment integration.',
    tags: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24UV5-wJhPNSF3IgnX2cGbYkiElk3Vzav3OT0Ez5dRA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcH0IulCXWR2cMYC7nnKIsb3buCxDmxaU4YJ9fDoYgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfdD8p_Gz70ykqNtURPVYY8im767hadDZLgrqvRIT9w&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2s_kkfY34IHhvPizpBbjhbMXcpmumq9fWe4OxgDvDA&s=10'
    ],
    img: belonjoapp,
    github: 'http://belonjoid.vercel.app/',
    link: 'http://belonjoid.vercel.app/',
  },
];
