import videoController from './video.controller';
import videomanagercontroller from './videomanagercontroller';
import { dirname } from 'path';

class VIDEOPROCESSCONTROLLER {
  // __dirname
  // fs
  // syncDir
  // implementar la funcion createoutputpath
  // convertfile
  // retornar el path de video
  async convert(originUrlVideo: string, videoId: any) {
    try {
      await videoController.createStatusProcessVideo('download', videoId);

      // const localPathVideo = await this.downloadFile(originUrlVideo)

      await videoController.createStatusProcessVideo('validate', videoId);

      // const isValidFile = await this.validateFile(localPathVideo)

      // if(!isValidFile) throw new Error('Error en el archivo')
      const outputVideoPath = await this.createOuputPath();

      await videoController.createStatusProcessVideo('convert', videoId);

      await this.convertFile(originUrlVideo, outputVideoPath);

      await videoController.createStatusProcessVideo('upload', videoId);

      // const newOriginUrlVideoConvert = await this.uploadFile(outputVideoPath)

      await videoController.createStatusProcessVideo('notified', videoId);

      // this.logExecuteProcess(newOriginUrlVideoConvert)
      // return newOriginUrlVideoConvert
      return {
        outputPath: outputVideoPath,
      };
    } catch (error) {
      await videoController.createStatusProcessVideo('error', videoId);
      throw error;
    }
  }

  async downloadFile(originUrlVideo: string) {
    return '/path/download/video.webm';
  }
  // ffprobe
  async validateFile(localPathVideo: string) {
    // ffprobeFromSpawn(localPath)
    // return true/false
    return true;
  }

  async createOuputPath() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return `${dirname(require.main.filename)}/videos/format/` + text + '.mp4';
  }

  async convertFile(localPathVideo: string, ouputPath: string) {
    try {
      await videomanagercontroller.changeFormatVideo(localPathVideo, ouputPath);
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(ouputPath: string) {
    try {
      // subir el file y retornal el newOriginUrlVideoConvert
      return '';
    } catch (error) {
      throw error;
    }
  }

  logExecuteProcess(newOriginUrlVideoConvert: string) {
    console.log(
      '🚀 ~ >>>>>>> newOriginUrlVideoConvert',
      newOriginUrlVideoConvert
    );
  }
}

export default new VIDEOPROCESSCONTROLLER();
