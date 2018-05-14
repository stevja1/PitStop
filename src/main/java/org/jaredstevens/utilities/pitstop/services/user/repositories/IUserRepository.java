package org.jaredstevens.utilities.pitstop.services.user.repositories;

import org.jaredstevens.utilities.pitstop.services.user.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IUserRepository extends CrudRepository<UserEntity, Long> {
    List<UserEntity> findByEmail(String email);
}
