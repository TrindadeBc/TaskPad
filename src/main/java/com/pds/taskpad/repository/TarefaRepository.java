package com.pds.taskpad.repository;

import com.pds.taskpad.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

}
