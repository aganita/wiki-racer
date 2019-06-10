const examples = { 
  input1: { 
    start: 'https://en.wikipedia.org/wiki/Malaria',
    end: 'https://en.wikipedia.org/wiki/Geophysics'
  },
  output1: { 
    start: 'https://en.wikipedia.org/wiki/Malaria',
    end: 'https://en.wikipedia.org/wiki/Geophysics',
    path: [ 
      'https://en.wikipedia.org/wiki/Malaria',
      'https://en.wikipedia.org/wiki/Miliaria',
      'https://en.wikipedia.org/wiki/Viscosity',
      'https://en.wikipedia.org/wiki/Geophysics' 
    ] 
  },
  input2: {
    start: 'https://en.wikipedia.org/wiki/Malaria',
    end: 'https://en.wikipedia.org/wiki/Geophysics'
  },
  output2: {
    start: 'https://en.wikipedia.org/wiki/Malaria', 
    end: 'https://en.wikipedia.org/wiki/Geophysics', 
    path: [
      'https://en.wikipedia.org/wiki/Malaria',
      'https://en.wikipedia.org/wiki/Agriculture',
      'https://en.wikipedia.org/wiki/M._King_Hubbert',
      'https://en.wikipedia.org/wiki/Geophysics'
    ]
  }
}