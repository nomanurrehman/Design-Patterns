import { DataSource } from './data-source';

export class PlainFile implements DataSource {
  private readonly name: string;
  
  constructor(name: string) {
    this.name = name;  
  }

  write(data: string): void {
    console.log(`Writing data {${data}} to file {${this.name}}`);
  }

  read(): string {
    return 'A quick brown fox jumps over the lazy dog.';
  }  
}
