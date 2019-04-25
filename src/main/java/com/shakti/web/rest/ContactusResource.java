package com.shakti.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.shakti.domain.Contactus;
import com.shakti.repository.ContactusRepository;
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
 * REST controller for managing Contactus.
 */
@RestController
@RequestMapping("/api")
public class ContactusResource {

    private final Logger log = LoggerFactory.getLogger(ContactusResource.class);

    private static final String ENTITY_NAME = "contactus";

    private final ContactusRepository contactusRepository;

    public ContactusResource(ContactusRepository contactusRepository) {
        this.contactusRepository = contactusRepository;
    }

    /**
     * POST  /contactuses : Create a new contactus.
     *
     * @param contactus the contactus to create
     * @return the ResponseEntity with status 201 (Created) and with body the new contactus, or with status 400 (Bad Request) if the contactus has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/contactuses")
    @Timed
    public ResponseEntity<Contactus> createContactus(@RequestBody Contactus contactus) throws URISyntaxException {
        log.debug("REST request to save Contactus : {}", contactus);
        if (contactus.getId() != null) {
            throw new BadRequestAlertException("A new contactus cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Contactus result = contactusRepository.save(contactus);
        return ResponseEntity.created(new URI("/api/contactuses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /contactuses : Updates an existing contactus.
     *
     * @param contactus the contactus to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated contactus,
     * or with status 400 (Bad Request) if the contactus is not valid,
     * or with status 500 (Internal Server Error) if the contactus couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/contactuses")
    @Timed
    public ResponseEntity<Contactus> updateContactus(@RequestBody Contactus contactus) throws URISyntaxException {
        log.debug("REST request to update Contactus : {}", contactus);
        if (contactus.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Contactus result = contactusRepository.save(contactus);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, contactus.getId().toString()))
            .body(result);
    }

    /**
     * GET  /contactuses : get all the contactuses.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of contactuses in body
     */
    @GetMapping("/contactuses")
    @Timed
    public List<Contactus> getAllContactuses() {
        log.debug("REST request to get all Contactuses");
        return contactusRepository.findAll();
    }

    /**
     * GET  /contactuses/:id : get the "id" contactus.
     *
     * @param id the id of the contactus to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the contactus, or with status 404 (Not Found)
     */
    @GetMapping("/contactuses/{id}")
    @Timed
    public ResponseEntity<Contactus> getContactus(@PathVariable Long id) {
        log.debug("REST request to get Contactus : {}", id);
        Optional<Contactus> contactus = contactusRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(contactus);
    }

    /**
     * DELETE  /contactuses/:id : delete the "id" contactus.
     *
     * @param id the id of the contactus to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/contactuses/{id}")
    @Timed
    public ResponseEntity<Void> deleteContactus(@PathVariable Long id) {
        log.debug("REST request to delete Contactus : {}", id);

        contactusRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
