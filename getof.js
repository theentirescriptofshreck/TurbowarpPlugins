class Fetch {
  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://lll69.github.io/ext/hello.txt'
            },
            thing: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Version'
            }
          }
        }
      ]
    };
  }

  get (args, thing) {
    a = fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
    got = JSON.parse(a)
    return got[thing]
  }
}

Scratch.extensions.register(new Fetch());h