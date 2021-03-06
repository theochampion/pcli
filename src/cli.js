import { program } from 'commander';
// commands
import { renameCmd } from './commands/rename';

export const cli = async args => {
  program
    .command('rename <input-csv-path> <input-folder-path> [output-folder-path]')
    .option('-v, --verbose', 'Activate verbose mode.', false)

    .description('Rename photos according to the CSV')
    .action(
      async (inputCsvPath, inputFolderPath, outputFolderPath, cmdOpt) =>
        await renameCmd(program.opts(), {
          ...cmdOpt.opts(),
          inputCsvPath,
          inputFolderPath,
          outputFolderPath:
            outputFolderPath !== undefined ? outputFolderPath : '.',
        }),
    );

  await program.parseAsync(args);
};
