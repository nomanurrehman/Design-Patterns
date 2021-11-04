import { DataSourceDecorator } from './data-source-decorator';

export class CompressionDecorator extends DataSourceDecorator {
  write(data: string): void {
    const compressedData: string = this.compress(data);
    return super.write(compressedData);
  }

  read(): string {
    const compressedData: string = super.read();
    return this.decompress(compressedData);
  }
  
  compress(data: string): string {
    return `Compressed ${data}`;
  }

  decompress(data: string): string {
    return `Decompressed ${data}`;
  }
}
