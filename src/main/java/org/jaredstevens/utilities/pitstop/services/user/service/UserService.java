package org.jaredstevens.utilities.pitstop.services.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.jaredstevens.utilities.pitstop.pojos.ResponseBase;
import org.jaredstevens.utilities.pitstop.services.user.repositories.IUserRepository;
import org.jaredstevens.utilities.pitstop.services.user.entities.UserEntity;
import org.jaredstevens.utilities.pitstop.services.vehicle.entities.VehicleEntity;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserService {
    @Autowired
    private IUserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET, path = "/hello/{name}", produces = "application/json")
    public ResponseBase<UserEntity> hello(@PathVariable final String name) {
        return new ResponseBase<>(
                String.format("Nice to meet you, %s!", name),
                ResponseBase.ResponseStatus.SUCCESS,
                null
        );
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{userId}", produces = "application/json")
    public ResponseBase<UserEntity> get(@PathVariable final long userId) {
        final UserEntity user = this.userRepository.findById(userId).get();
        return new ResponseBase<>(
                String.valueOf(user.getId()),
                ResponseBase.ResponseStatus.SUCCESS,
                user
        );
    }

    @RequestMapping(method = RequestMethod.GET, path = "/auth/{email}/{password}", produces = "application/json")
    public ResponseBase<UserEntity> auth(@PathVariable final String email, @PathVariable(name = "email") final String password) {
        final List<UserEntity> users = this.userRepository.findByEmail(email);

        if(users != null && users.size() > 0) {
            UserEntity user = users.get(0);
            return new ResponseBase<>(
                    String.valueOf(user.getId()),
                    ResponseBase.ResponseStatus.SUCCESS,
                    user
            );
        } else {
            return new ResponseBase<>(
                    "Invalid login.",
                    ResponseBase.ResponseStatus.FAILURE,
                    null
            );
        }
    }

    @RequestMapping(method = RequestMethod.POST, path = "/", produces = "application/json")
    public ResponseBase<UserEntity> save(@RequestBody final UserEntity user) {
        List<UserEntity> existingUsers = this.userRepository.findByEmail(user.getEmail());
        if(existingUsers != null && existingUsers.size() > 0) {
            return new ResponseBase<>(
                    "User already exists!",
                    ResponseBase.ResponseStatus.FAILURE,
                    null
            );
        }
        UserEntity savedUser = this.userRepository.save(user);
        return new ResponseBase<>(
                String.valueOf(savedUser.getId()),
                ResponseBase.ResponseStatus.SUCCESS,
                savedUser
        );
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{userId}", produces = "application/json")
    public ResponseBase<UserEntity> save(@PathVariable final long userId, @RequestBody final UserEntity user) {
        user.setId(userId);
        UserEntity savedUser = this.userRepository.save(user);
        return new ResponseBase<>(
                String.valueOf(savedUser.getId()),
                ResponseBase.ResponseStatus.SUCCESS,
                user
        );
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{userId}/vehicles", produces = "application/json")
    public ResponseBase<List<VehicleEntity>> getUserVehicles(@PathVariable final long userId) {
        return new ResponseBase<>(
                "Success",
                ResponseBase.ResponseStatus.SUCCESS,
                this.userRepository.findById(userId).get().getVehicles()
        );
    }
}
