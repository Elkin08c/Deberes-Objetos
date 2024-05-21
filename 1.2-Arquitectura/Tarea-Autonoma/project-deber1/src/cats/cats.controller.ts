import { Controller, Param, HttpCode, Delete } from '@nestjs/common';


@Controller ('cats')
export class CatsController {
    @Delete(':id')
    @HttpCode (204)
    remove (@Param('id') id: string) {
        return `This will delete a cat with the id${id}`;
    }
}