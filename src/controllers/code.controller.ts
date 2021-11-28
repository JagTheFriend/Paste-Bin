import { NextFunction, Request, Response } from 'express';

class CodeController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res
        .set(
          'Content-Security-Policy',
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
        )
        .render('index');
    } catch (error) {
      next(error);
    }
  };
}

export default CodeController;
