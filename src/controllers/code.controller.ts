import { NextFunction, Request, Response } from 'express';

class CodeController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    const code = `idk\nwhat to\nwrite here\n`;
    try {
      res
        .set(
          'Content-Security-Policy',
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
        )
        .render('index', { code: code });
    } catch (error) {
      next(error);
    }
  };
  public newPaste = (req: Request, res: Response) => {
    res.render('New');
  };
}

export default CodeController;
