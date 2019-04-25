package com.shakti.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.shakti.domain.Signup;
import com.shakti.repository.SignupRepository;
import com.shakti.web.rest.errors.BadRequestAlertException;
import com.shakti.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Signup.
 */
@RestController
@RequestMapping("/api")
public class SignupResource {

    private final Logger log = LoggerFactory.getLogger(SignupResource.class);

    private static final String ENTITY_NAME = "signup";

    private final SignupRepository signupRepository;

    public SignupResource(SignupRepository signupRepository) {
        this.signupRepository = signupRepository;
    }

    /**
     * POST  /signups : Create a new signup.
     *
     * @param signup the signup to create
     * @return the ResponseEntity with status 201 (Created) and with body the new signup, or with status 400 (Bad Request) if the signup has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/signups")
    @Timed
    public ResponseEntity<Signup> createSignup(@RequestBody Signup signup) throws URISyntaxException {
        log.debug("REST request to save Signup : {}", signup);
        if (signup.getId() != null) {
            throw new BadRequestAlertException("A new signup cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Signup result = signupRepository.save(signup);
        return ResponseEntity.created(new URI("/api/signups/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /signups : Updates an existing signup.
     *
     * @param signup the signup to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated signup,
     * or with status 400 (Bad Request) if the signup is not valid,
     * or with status 500 (Internal Server Error) if the signup couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/signups")
    @Timed
    public ResponseEntity<Signup> updateSignup(@RequestBody Signup signup) throws URISyntaxException {
        log.debug("REST request to update Signup : {}", signup);
        if (signup.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Signup result = signupRepository.save(signup);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, signup.getId().toString()))
            .body(result);
    }

    /**
     * GET  /signups : get all the signups.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of signups in body
     */
    @GetMapping("/signups")
    @Timed
    public List<Signup> getAllSignups() {
        log.debug("REST request to get all Signups");
        return signupRepository.findAll();
    }

    /**
     * GET  /signups/:id : get the "id" signup.
     *
     * @param id the id of the signup to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the signup, or with status 404 (Not Found)
     */
    @GetMapping("/signups/{id}")
    @Timed
    public ResponseEntity<Signup> getSignup(@PathVariable Long id) {
        log.debug("REST request to get Signup : {}", id);
        Optional<Signup> signup = signupRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(signup);
    }

    /**
     * DELETE  /signups/:id : delete the "id" signup.
     *
     * @param id the id of the signup to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/signups/{id}")
    @Timed
    public ResponseEntity<Void> deleteSignup(@PathVariable Long id) {
        log.debug("REST request to delete Signup : {}", id);

        signupRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
