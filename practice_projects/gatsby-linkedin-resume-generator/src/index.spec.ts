import { main } from '.';
import { readFileSync, writeFileSync, existsSync, writeFile } from 'fs';
import linkedInMock from './mocks/mock-linked-in.json';
import invalidLinkedInMock from './mocks/invalid-linked-in.json';
import resumeMock from './mocks/resume.json';
import { getLinkedInData } from './utils/linkedin';
import { LINKED_IN_PATH, RESUME_PATH } from './utils/path';

jest.mock('./utils/linkedin');
jest.mock('fs');

describe('CLI', () => {
  beforeEach(() => {
    // @ts-ignore-line
    readFileSync.mockReset();
    // @ts-ignore-line
    existsSync.mockReset();
    // @ts-ignore-line
    writeFileSync.mockReset();
  });

  it('should validate and map LinkedIn data ', async () => {
    // @ts-ignore-line
    readFileSync.mockReturnValue(JSON.stringify(linkedInMock));
    // @ts-ignore-line
    existsSync.mockReturnValue(true);

    await main({});

    expect(writeFileSync).toHaveBeenCalledTimes(1);
    expect(writeFileSync).toHaveBeenCalledWith(
      RESUME_PATH,
      JSON.stringify(resumeMock, null, 2),
    );
  });

  it('should thrown an error on invalid LinkedIn Data', async () => {
    // @ts-ignore-line
    readFileSync.mockReturnValue(JSON.stringify(invalidLinkedInMock));
    // @ts-ignore-line
    existsSync.mockReturnValue(true);

    try {
      await main({});
      expect(false).toBe(true);
    } catch (x) {
      expect(true).toBe(true);
    }
  });

  it('should ask for LinkedIn credentials when renew is sent', async () => {
    // @ts-ignore-line
    readFileSync.mockReturnValue(JSON.stringify(linkedInMock));
    // @ts-ignore-line
    existsSync.mockReturnValue(true);
    // @ts-ignore-line
    getLinkedInData.mockResolvedValue(linkedInMock);

    await main({ renew: true });
    expect(writeFileSync).toHaveBeenCalledTimes(2);
    expect(writeFileSync).toHaveBeenCalledWith(
      LINKED_IN_PATH,
      JSON.stringify(linkedInMock, null, 2),
    );
    expect(writeFileSync).toHaveBeenCalledWith(
      RESUME_PATH,
      JSON.stringify(resumeMock, null, 2),
    );
  });
});
