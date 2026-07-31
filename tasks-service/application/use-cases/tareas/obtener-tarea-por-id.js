export class ObtenerTareaPorIdUseCase {

    constructor(tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async execute(id, userId) {
        return this.tareaRepository.obtenerPorId(
            id,
            userId,
        );
    }

}