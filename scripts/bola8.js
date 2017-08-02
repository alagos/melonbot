// Description:
//   Hubot te da un consejo según las frases de la Bola 8 (en español).
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   melonbot pregunta|consejo

var consejos = [
  'En mi opinión, sí',
  'Es cierto',
  'Es decididamente así',
  'Probablemente',
  'Buen pronóstico',
  'Todo apunta a que sí',
  'Sin duda',
  'Sí',
  'Sí - definitivamente',
  'Debes confiar en ello',
  'Respuesta vaga, vuelve a intentarlo',
  'Pregunta en otro momento',
  'Será mejor que no te lo diga ahora',
  'No puedo predecirlo ahora',
  'Concéntrate y vuelve a preguntar',
  'No cuentes con ello',
  'Mi respuesta es no',
  'Mis fuentes me dicen que no',
  'Las perspectivas no son buenas',
  'Muy dudoso'
];

module.exports = function(robot) {
  robot.respond(/pregunta|consejo|duda/gi, function(res) {

    res.send( ':quokka: ~ ' + res.random(consejos) );

  });
};
