import { DataSource } from './data-source';
import { PlainFile } from './plain-file';
import { EncryptionDecorator } from './encryption-decorator';
import { CompressionDecorator } from './compression-decorator';

/**
 * Simple file without any extra functionality
 */
const file: PlainFile = new PlainFile('sample.txt');
file.write('A quick brown fox jumps over the lazy dog.');
file.read();

/**
 * File with encryption functionality
 */
const encryptedFile: EncryptionDecorator = new EncryptionDecorator(file);
encryptedFile.write('A quick brown fox jumps over the lazy dog.');
console.log(encryptedFile.read());

/**
 * File with compression functionality
 */
const compressedFile: CompressionDecorator = new CompressionDecorator(file);
compressedFile.write('A quick brown fox jumps over the lazy dog.');
console.log(compressedFile.read());

/**
 * File with encryption and compression
 * functionality
 */
const encryptedAndCompressedFile: DataSource = new EncryptionDecorator(new CompressionDecorator(file));
encryptedAndCompressedFile.write('A quick brown fox jumps over the lazy dog.');
console.log(encryptedAndCompressedFile.read());
