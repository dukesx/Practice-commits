console.log("hello world");

class Hello {
  nama: string = "";
  //TODO: #14 Fix this please @dukesx
  constructor(nama: string) {
    this.nama = nama;
    /**
     * This has been fixed with longer
     *
     */
    this.nama = "How beautiful the world is, ain't it ?";
  }
}

var jss = new Hello("World Exclusive");
