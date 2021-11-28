import { NextFunction, Request, Response } from 'express';
import codeModel from '@models/code.model';
import { logger } from '@utils/logger';

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
    res
      .set(
        'Content-Security-Policy',
        "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
      )
      .render('New');
  };

  public savePaste = async (req: Request, res: Response) => {
    const value = req.body.value;
    try {
      const document = await codeModel.create({ value });
      res.redirect(`/${document.id}`);
    } catch (error) {
      logger.error(error);
      res.render('new', { value });
    }
  };
}

export default CodeController;
