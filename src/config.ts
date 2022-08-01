import path from "path";

export const PORT = process.env.PORT || 3669;

export const isProduction = process.env.NODE_ENV === "production";

export const isTest = process.env.NODE_ENV === "test";

/**
 * The mailbox directory.
 *
 * If is test environment, it is the test directory.
 */
export const BOXS_DIRECTORY_PATH = isTest
  ? path.join(__dirname, "../fakeDir/")
  : "/home/user-data/mail/mailboxes/";
