package org.jaredstevens.utilities.pitstop.services.mileage.repositories;

import org.jaredstevens.utilities.pitstop.services.mileage.entities.MileageEntity;
import org.springframework.data.repository.CrudRepository;

public interface IMileageRepository extends CrudRepository<MileageEntity, Long> {
}
