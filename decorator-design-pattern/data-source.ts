export interface DataSource {
  write(data: string): void;
  read(): string;
}
