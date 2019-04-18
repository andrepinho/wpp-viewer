// data = `[17:39, 17/4/2019] Filipe Linhares: Toma refri?
// [17:39, 17/4/2019] André Pinho: altx guaraná fei
// [17:40, 17/4/2019] André Pinho: hsuaihsiuahsuia
// [17:40, 17/4/2019] Filipe Linhares: Hahahahhhaha
// [17:40, 17/4/2019] André Pinho: q tu me diz de amanhã a tarde a gente gastar 1h e aquelas Eisenbah q tão ali na geladeira p fazer o esquema do Zap lá?
// [17:40, 17/4/2019] André Pinho: bora agendar?
// [17:41, 17/4/2019] Filipe Linhares: Bora sim
// [17:44, 17/4/2019] André Pinho: Tá, amanhã a gente almoça juntos e depois foca nisso, pode ser?
// [17:46, 17/4/2019] Filipe Linhares: Beleza, de manhã vou ta amarrado em um lance do apoia.se mesmo
// [17:46, 17/4/2019] André Pinho: dale
// [17:46, 17/4/2019] André Pinho: tu vai p tua mãe no feriado?
// [17:46, 17/4/2019] André Pinho: ou vai ficar por aqui?
// [17:50, 17/4/2019] Filipe Linhares: Vou pra mamis: passar a páscoa lá com o pai
// [17:53, 17/4/2019] André Pinho: massa!
// [14:20, 18/4/2019] André Pinho: Me liberei aqui
// [14:21, 18/4/2019] André Pinho: To indo p casa
// [14:21, 18/4/2019] André Pinho: Tu quer algo da rua?`


function parseLine(line) {
    const dateRx = /\[.*\]/g
    const [time, date] = dateRx.exec(line)[0].replace(/\[|\]/g, '').split(',')
    const lineWithoutDate = line.replace(dateRx, '').trim()
    const [name, ...messageArray] = lineWithoutDate.split(':')
    const message = messageArray.join(':')
    return {date, time, name, message}
  }

export default function messageParser(data) {
  data = data.trim();
  const messages = data.split('\n')
  const parsedMessages = messages.map(parseLine);
  return {
    messages: parsedMessages,
    names: [...new Set(parsedMessages.map(item => item.name))]
  }
}
