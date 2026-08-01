export class EliminarTareaUseCase {
    constructor(tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async execute(id, userId) {
        const existe = await this.tareaRepository.obtenerPorId(id, userId);

        if (!existe) {
            return false;
        }

        await this.tareaRepository.eliminar(id, userId);

        return true;
    }
}
