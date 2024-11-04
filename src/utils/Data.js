const pinterestPosts = [
  {
    id: '0',
    image:
      'https://i.pinimg.com/474x/d4/75/44/d4754494a28f7456e7458ac3e290e318.jpg',
    title: 'Old money',
    likes: 150,
    comments: 5,
  },
  {
    id: '1',
    image:
      'https://i.pinimg.com/474x/2a/75/8b/2a758bf581a114a5d9f11452ec11ab32.jpg',
    title: 'Abstract Art',
    likes: 200,
    comments: 10,
  },
  {
    id: '2',
    image:
      'https://i.pinimg.com/originals/f6/c3/93/f6c3937a4411215b7359336d638980ec.jpg',
    title: 'porsche 911 | porsche 911 gt3 | black wallpaper #porsche',
    likes: 300,
    comments: 15,
  },
  {
    id: '3',
    image:
      'https://i.pinimg.com/564x/f6/53/b8/f653b826935c938025c07765bf168b0a.jpg',
    title: 'How to dress for your body type',
    likes: 120,
    comments: 8,
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/564x/20/ef/b9/20efb9d05a9f41a6d06f5d600de1b9ed.jpg',
    title: 'Gunmetal grey porsche',
    likes: 180,
    comments: 12,
  },
  {
    id: '5',
    image:
      'https://i.pinimg.com/564x/46/8b/a9/468ba9cd91ca558b34d97204fd83ed81.jpg',
    title: '',
    likes: 50,
    comments: 3,
  },
  {
    id: '6',
    image:
      'https://i.pinimg.com/474x/01/92/48/0192489f020c925d63d6bdc691830405.jpg',
    title: 'The Vallarta House by Ezequiel Farca Architects: Large & Modern',
    likes: 240,
    comments: 20,
  },
  {
    id: '7',
    image:
      'https://i.pinimg.com/564x/39/ea/6e/39ea6ed3a4dd259bf95aa1e5f327c52e.jpg',
    title: 'The Dodge challenger',
    likes: 90,
    comments: 5,
  },
  {
    id: '8',
    image:
      'https://i.pinimg.com/474x/47/4a/14/474a142174525e10d749aacc24b53f99.jpg',
    title: 'my Macbook Pro M1 setup',
    likes: 130,
    comments: 7,
  },
  {
    id: '9',
    image:
      'https://i.pinimg.com/474x/01/d7/6f/01d76f2237584909b4255e2de9025b26.jpg',
    title: 'Night drives',
    likes: 170,
    comments: 6,
  },
  {
    id: '10',
    image:
      'https://i.pinimg.com/736x/36/9b/a6/369ba66b5428585ad149614ed2bafe3d.jpg',
    title: 'Signature decor',
    likes: 110,
    comments: 4,
  },
  {
    id: '11',
    image:
      'https://i.pinimg.com/564x/67/d1/3d/67d13d851bc27e4fbdb4d71a5e25998f.jpg',
    title: 'randoms',
    likes: 70,
    comments: 2,
  },
  {
    id: '12',
    image:
      'https://i.pinimg.com/736x/10/c6/0e/10c60ee1403088a89f196f0d62073230.jpg',
    title: '',
    likes: 40,
    comments: 1,
  },
  {
    id: '13',
    image:
      'https://i.pinimg.com/474x/8b/f3/77/8bf377ed0922afa64faa12cbb420b659.jpg',
    title: 'Work',
    likes: 160,
    comments: 9,
  },
  {
    id: '14',
    image:
      'https://i.pinimg.com/474x/58/27/99/5827990718dd9a2a92791d5c036f8f93.jpg',
    title: 'Never be late',
    likes: 140,
    comments: 8,
  },
  {
    id: '15',
    image:
      'https://i.pinimg.com/474x/b5/a2/9b/b5a29bf3bc0a270cb2d11079bc204f1a.jpg',
    title: 'Pinscher',
    likes: 90,
    comments: 3,
  },
  {
    id: '16',
    image:
      'https://i.pinimg.com/736x/0d/0e/bd/0d0ebd08337ab56292a04e9c7d2dc56a.jpg',
    title: 'Challenger',
    likes: 220,
    comments: 16,
  },
  {
    id: '17',
    image:
      'https://i.pinimg.com/564x/f8/b6/00/f8b600076b442fbf67eec5caeb73b9aa.jpg',
    title: 'LOCALIC',
    likes: 50,
    comments: 2,
  },
  {
    id: '18',
    image:
      'https://i.pinimg.com/474x/bf/c8/16/bfc8164d993aab3452cf9003e3729847.jpg',
    title: 'Sorbonne University, Paris',
    likes: 300,
    comments: 25,
  },
  {
    id: '19',
    image:
      'https://i.pinimg.com/564x/2b/a0/37/2ba03703a4f68a35bf6d9d8ebef6b259.jpg',
    title: 'Park',
    likes: 80,
    comments: 4,
  },
  {
    id: '20',
    image:
      'https://i.pinimg.com/474x/e2/b3/aa/e2b3aab8259b27dbcc0172913fc95e3f.jpg',
    title: 'GT2 RS',
    likes: 150,
    comments: 10,
  },
  {
    id: '21',
    image:
      'https://i.pinimg.com/736x/37/8f/ae/378faef6d981c6b01ae8c36a73850a05.jpg',
    title: '',
    likes: 30,
    comments: 1,
  },
  {
    id: '22',
    image:
      'https://i.pinimg.com/474x/8e/c9/0f/8ec90f77b3eb65646f40ec2d7a447e1a.jpg',
    title: 'ca$h',
    likes: 200,
    comments: 15,
  },
  {
    id: '23',
    image:
      'https://i.pinimg.com/564x/7d/5a/a7/7d5aa7fd35ce5012a212eb51130550f6.jpg',
    title: '',
    likes: 60,
    comments: 3,
  },
];

export default pinterestPosts;
