import { DataSource } from './data-source';

export class DataSourceDecorator implements DataSource {
  private readonly wrappedDataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.wrappedDataSource = dataSource;
  }

  write(data: string): void {
    return this.wrappedDataSource.write(data);
  }

  read(): string {
    return this.wrappedDataSource.read();
  }
}
  