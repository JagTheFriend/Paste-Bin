import { NextFunction, Request, Response } from 'express';
import codeModel from '@models/code.model';
import { logger } from '@utils/logger';

class CodeController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    res.redirect('/new');
  };
  public newPaste = (req: Request, res: Response) => {
    res
      .set(
        'Content-Security-Policy',
        "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
      )
      .render('new');
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

  public viewPaste = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const document = await codeModel.findById(id);
      res
        .set(
          'Content-Security-Policy',
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
        )
        .render('index', { code: document.value, id });
    } catch (error) {
      logger.error(error);
      res.redirect('/');
    }
  };

  public duplicatePaste = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const document = await codeModel.findById(id);
      res
        .set(
          'Content-Security-Policy',
          "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'",
        )
        .render('new', { value: document.value, id });
    } catch (error) {
      logger.error(error);
      res.redirect(`/${id}`);
    }
  };
}

export default CodeController;
