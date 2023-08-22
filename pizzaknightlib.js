// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class MyExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'myextensionexample',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Pizza Knight Library',

      blocks: [
        { //download function
          opcode: 'collide',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            x : {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            },
            w: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
            },
            h: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            },
            a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
            },
            b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
            },
            c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            },
            d: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 16
            }
          },
          text: 'Does Collide: X1:[x], Y1: [y] W1:[w], H1:[h], X2[a], Y2:[b], W2:[c], H2:[c]'
        }
      ]
    };
  }

    collide(x, y, w, h, a, b, c, d) {
      function within(value,mn,mx){
        return (mn<=value)&&(mx>=value);
      }
      return (within(x,a,a+c)||within(x+w,a,a+c))&&(within(y,b,b+d)||within(y+h,b,b+d));
    }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
